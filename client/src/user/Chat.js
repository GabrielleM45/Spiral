import React, { Component } from 'react';
import io from "socket.io-client";
import { read, getChats, getChatList } from './apiUser';
import { isAuthenticated } from "../auth";




const socketUrl = `${process.env.REACT_APP_API_URL}`;
let socket;

class Chat extends Component {
    constructor() {
        super();
        this.messagesEndRef = React.createRef();
        this.state = {
            socket: "",
            message: "",
            messages: [],
            sender: {},
            reciever: {},
            chatList: [],
            onlineUsers: [],
            chosenEmoji: null,
            showPicker: false
        };
    }
    

    init = async (userId) => {
        const token = isAuthenticated().token;
        const user = await read(userId, token);
        if (user.error) {
            console.log(user.error)
        } else {
            return user;
        }
    };

    async componentWillMount() {
        this.setState({ loading: true });
        const senderId = this.props.match.params.user1Id;
        const recieverId = this.props.match.params.user2Id;
        const data = await getChats(senderId, recieverId)
        const chatList = await getChatList(senderId)
        
        if (data.error) {
            console.log(data.error)
        } else if(chatList.error){
            console.log(chatList.error)
        } else {
            this.setState({ messages: data, loading: false, chatList: chatList })
            //console.log(data);
        }
    }

    async componentDidMount() {
        this.scrollToBottom()
        const senderId = this.props.match.params.user1Id;
        const recieverId = this.props.match.params.user2Id;
        const sender = await this.init(senderId);
        const reciever = await this.init(recieverId);
        this.setState({ sender, reciever });

        await this.initSocket();
        socket.on('message', async (newChat) => {
            console.log('pushed');
           if (newChat.sender._id === recieverId || newChat.sender._id === senderId) {
                this.setState({ messages: [...this.state.messages, newChat] })
            }
        });

    }

    componentDidUpdate(){
        this.scrollToBottom()
    }

   

    initSocket = () => {
        const { sender } = this.state;
        socket = io(socketUrl);
        socket.on('connect', () => {
            socket.emit('userInfo', sender);
        })
        this.setState({ socket });
    }

    sendMessage = (e) => {
        e.preventDefault();
        const { message, sender, reciever } = this.state;
        if (message) {
            socket.emit('sendMessage', message, sender, reciever, () => {
                console.log('sent ', message);
                this.setState({ message: '', showPicker: false })
            })
        }
    }

    getChats = async () => {
        const { sender, reciever } = this.state;
        const data = await getChats(sender._id, reciever._id)
        if (data.error) {
            alert(data.error)
        } else {
            this.setState({ messages: data })
           
        }
    }

    onEmojiClick = (event, emojiObject) => {
        let message = this.state.message;
        message = message + emojiObject.emoji;
        this.setState({
            chosenEmoji: emojiObject,
            message
        })
    }

    renderChat = (chat, i) => {
        if (chat.sender._id === isAuthenticated().user._id) {
            return <li key={i} className="chat-right">
                
                <div className="chat-text">
                    {chat.message}
                </div>
            </li>
        } else {
            return <li key={i} className="chat-left">
                <div className="chat-avatar">

                    <div className="chat-name">{chat.sender.name}</div>
                </div>
                <div className="chat-text">
                    {chat.message}
                </div>
               
            </li>
        }
    }

    render() {
        const { chatList, messages, reciever, sender, showPicker, loading } = this.state;
        return (
            <iframe src="https://socketio-chat-h9jt.herokuapp.com/" width="100%" height="480" style={{backgroundColor: "white"}} scrolling="no" class="iframe-class" frameborder="0"></iframe>
           
      );
    }
}

export default Chat;

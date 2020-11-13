import React from "react";
function Members() {
    return (
        <>


            <div className="container">
                <h1>See All Members</h1>

                <div className="row" id="memberRow">
                    <div className="col">
                        <div className="card userCard">
                            <a href="/member/1"><img className="card-img-top profilePicture" src="/default/default.png" alt="User Picture" /></a>
                                <div className="card-body">
                                    <h5 className="card-title"> <a className="UserDetail">metasabeya ketsela</a></h5>
                                    <p className="card-text"><a className="UserDetail"></a></p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a className="UserDetail">Title: </a></li>
                                    <li className="list-group-item"><a className="UserDetail">Hobbies: </a></li>
                                    <li className="list-group-item"><a className="UserDetail">Interests: </a></li>
                                </ul>
                                <div className="card-body">
                                    <a href="/member/1" className="card-link">View Profile</a>
                                </div>
      </div>
                        </div>
                    </div>
                    <div id="NoNembers"></div>
                </div>

                <div className="footer">
                    © <a href="https://github.com/strawberryboar" target="__blank">Athena Petrovich</a> | <a href="https://github.com/maynperalta" target="__blank">Maynard Peralta</a> | <a href="https://github.com/vmcgargill" target="__blank">Vincent McGargill</a>
                </div>


                <ul id="ui-id-1" tabindex="0" className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style={{ display: "none" }}></ul><div role="status" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible"></div></>
    )
}
export default Members;
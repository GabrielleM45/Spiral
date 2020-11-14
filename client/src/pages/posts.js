import React from "react";
function Posts() {
    return (
        <>

          
           
           
            <div className="container">
                <h1>View All Posts</h1><br />

                <label for="users">Filter by Author</label><br />
                <select name="users" id="users" className="DropDowns">
                    <option value="AllUsers">All Users</option>
                </select><br /><br />

                <label for="categories">Filter by Category</label><br />
                <select name="categories" id="categories" className="DropDowns">
                    <option value="AllCategories">All Categories</option>
                </select><br /><br />

                <label for="age">Filter by Newest or Oldest</label><br />
                <select name="age" id="age" className="DropDowns">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                </select><br /><br />

                <input type="text" id="SearchFilteresBlogs" placeholder="Search Filtered List" /><br /><br />

                <div style={{ display: "none" }} id="alert" className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span> <span className="msg"></span>
                </div>
                <div id="FilterBlogs"><div className="row">
                    <div id="NoBlogs"></div>
                    <div className="col" id="BlogList">
                    </div>
                </div></div>
            </div>

            <div className="footer">
                © <a href="https://github.com/strawberryboar" target="__blank">Athena Petrovich</a> | <a href="https://github.com/maynperalta" target="__blank">Maynard Peralta</a> | <a href="https://github.com/vmcgargill" target="__blank">Vincent McGargill</a>
            </div>


            <ul id="ui-id-1" tabindex="0" className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style={{ display: "none" }}></ul><div role="status" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible"></div></>
    )
}

export default Posts;
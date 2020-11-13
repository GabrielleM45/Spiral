import React from "react";
function Home() {
    return (
        <>

       
         
         
            <div className="container">
                <h2>Welcome to the Blog Machine</h2>
                <h4>The Blog machine is an app that lets bloggers share their articles with fellow authors.</h4><br />
                <h4>Recently Posted Blogs:</h4>

                <div id="RecentBlogs"><div className="row">
                    <div id="NoBlogs"></div>
                    <div className="col" id="BlogList">
                    </div>
                </div></div>
            </div>

            <div className="footer">
                © <a href="https://github.com/strawberryboar" target="__blank">Athena Petrovich</a> | <a href="https://github.com/maynperalta" target="__blank">Maynard Peralta</a> | <a href="https://github.com/vmcgargill" target="__blank">Vincent McGargill</a>
            </div>


            <ul id="ui-id-1" tabindex="0" className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style={{display: "none;"}}></ul><div role="status" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible"></div>
        </>

    )

}

export default Home;

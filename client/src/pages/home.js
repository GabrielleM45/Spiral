import React from "react";
import Footer from "./src/components/footer";
function Home() {
    return (
        <>

            <div className="container">
                <h2>Spiral</h2>
                <h4>Spiral is an app that lets users share their content.</h4><br />
                <h4>Recent Posts:</h4>

                <div id="RecentPosts"><div className="row">
                    <div id="NoPosts"></div>
                    <div className="col" id="PostList">
                    </div>
                </div></div>
            </div>

            <footer />


            {/* <ul id="ui-id-1" tabindex="0" className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style={{display: "none;"}}></ul><div role="status" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible"></div> */}
        </>

    )

}

export default Home;

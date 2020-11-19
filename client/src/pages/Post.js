import React from 'react';

export default () => {
    return (
    <div className = "row" >
        <div className="col-md-6">
            <form id="submitForm">
                <div className="form-group">
                </div>
                {/* {{!-- Enter Title --}} */}
                <label for="title">Title:</label>
                <input placeholder="Post Title" type="text" className="form-control" id="title" maxlength="50" />
                <br />
                {/* {{!-- Enter Body --}} */}
                <label for="body">Body:</label>
                <textarea placeholder="Post Body" className="form-control" rows="10" id="body" maxlength="100000"></textarea>
                <br />
                {/* {{!-- Select Category --}} */}
                <label for="category">Select Category</label>
                <select name="category" id="category" className="DropDowns">
                    {/* {{#each category }} */}
                    <option value="{{id}}">name</option>
                    {/* {{/each}} */}
                </select><br />
                    {/* {{!-- Select Mood --}} */}
                    <label for="mood">Select Mood</label>
                    <select name="mood" id="mood" className="DropDowns">
                        <option value="None">None</option>
                        <option className="MoodOpt" value="Happy">Happy</option>
                        <option className="MoodOpt" value="Cheerful">Cheerful</option>
                        <option className="MoodOpt" value="Dreamy">Dreamy</option>
                        <option className="MoodOpt" value="Sad">Sad</option>
                        <option className="MoodOpt" value="Excited">Excited</option>
                        <option className="MoodOpt" value="Angry">Angry</option>
                        <option className="MoodOpt" value="Depressed">Depressed</option>
                        <option className="MoodOpt" value="Confused">Confused</option>
                        <option className="MoodOpt" value="Romantic">Romantic</option>
                        <option className="MoodOpt" value="Silly">Silly</option>
                        <option value="Other">Other</option>
                    </select><br />
                        <input placeholder="Enter Mood" type="text" className="form-control hidden" id="moodInput" maxlength="20" /><br />
                            {/* {{!-- Submit Blog --}} */}
                            <button type="submit" className="btn btn-success submit">Submit</button>
			
		</form>
                    {/* {{!-- Error Partial --}} */}
                    {/* {{> error}} */}
	</div>
</div>
)
 }

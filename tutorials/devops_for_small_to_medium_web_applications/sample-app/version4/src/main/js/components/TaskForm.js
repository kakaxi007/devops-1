/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const React = require('react');
const Task = require('../model/Task');
const uuidUtils = require('../utils/uuidUtils');

class TaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {description: ''};
    }

    handleChange(event) {
        this.setState({description: event.target.value});
    }

    handleSubmit(event) {
        const task = new Task({
            uuid: uuidUtils.generateUuid(),
            description: this.state.description
        });
        this.props.onSubmit(task);
        this.setState({description: ''});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    Description:
                    <input type="text" value={this.state.description} onChange={e => this.handleChange(e)}/>
                </label>
                <button type="submit">Add</button>
            </form>
        );
    }
}

module.exports = TaskForm;
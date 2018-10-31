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
const machineService = require('../services/machineService');

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {machine: {}};
    }

    componentDidMount() {
        machineService.find()
            .then(machine => {
                this.setState({machine: machine});
            })
            .catch(error => {
                console.error('Unable to find the machine information: ' + JSON.stringify(error));
            });
    }

    render() {
        return (
            <header>
                <div id="header-title">To-Do list</div>
                <div id="header-context">
                    <div>Hostname: {this.state.machine.hostname}</div>
                    <div>Instance Id: {this.state.machine.instanceId}</div>
                </div>
            </header>
        );
    }
}

module.exports = Header;
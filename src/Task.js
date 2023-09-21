import { Component } from "react";
import imageThree from './taskStar.png';

export class Task extends Component {
    state = {
        userInput: "",
        taskList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addTask(input) {
        if (input ==='') {
            alert("Please enter a task!")
        }

        else {
            let taskArray = this.state.taskList;
            taskArray.push(input)
            this.setState({taskList: taskArray, userInput: ""})
        }
    }

    doneTask(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }


    deleteTask() {
        let taskArray = this.state.taskList;
        taskArray = [];
        this.setState({taskList: taskArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div >
                <form className="middleContainer" onSubmit={this.onFormSubmit}>
                    {/* input */}

                    <div className="container">
                        <div>
                            <input type="text"
                                placeholder="What do I need to do today?"
                                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                                value={this.state.userInput}/> 
                        </div>

                        {/* add btn */}
                        <div>
                            <button className="addBtn" onClick={() => this.addTask(this.state.userInput)}>+</button>
                        </div>
                    </div>

                    {/* list */}
                    <div>
                        <ul>
                            {this.state.taskList.map((item, index) => (
                                <li onClick={this.doneTask} key={index}><img src={imageThree} alt="Circle" width="20px"/>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* delete btn */}
                    <div>
                        <button className="deleteBtn" onClick={() => this.deleteTask()}>Delete!</button>
                    </div>
                </form>
            </div>
        )
    }
}
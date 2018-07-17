import * as React from 'react';
import { Ajax } from '../../utils/ajax.util';

const URL = 'https://evening-dawn-11092.herokuapp.com/comments';

export class Comm extends React.Component {

    constructor() {
        super();
        this.state = {
          list: [],
          author: '',
          text: '',
        };
    
        Ajax.get(URL, (resp) => {
          this.setState({list: resp});
        });
      }
      addTask(task) {
        this.setState({
          author: '',
          text: '',
          list: this.state.list.concat([task])
        })
      }
    
      submitForm(e) {
        e.preventDefault();
        Ajax.post(URL, {author: this.state.author, text: this.state.text}, (resp) => {
         this.addTask(resp);
        })
      }
      inputHandlerAuthor(e) {
        const target = e.target;
        console.log(target.value);
        this.setState({
          list: this.state.list,
          author: target.value
        });
      }
      inputHandlerText(e) {
        const target = e.target;
        console.log(target.value);
        this.setState({
          list: this.state.list,
          text: target.value
        });
      }

    render(){
        const listItems = [];

        this.state.list.forEach((item) => {
          const li = <div className="commentSection"><div className="commentSection__author">{item.author}</div><div className="commentSection__comment">{item.text}</div><span className="commentSection__time">{item.date}</span></div>;
          listItems.push(li);
        });

        return <div className="comments">
        <div className="addSection">
        <form  onSubmit={this.submitForm.bind(this)}>
           <input placeholder="Ваше имя" type="text" className="addSection__author"  onInput={this.inputHandlerAuthor.bind(this)}/>
           <textarea placeholder="Ваш комментарий" name="" id=""  ls="30" rows="10" className="addSection__comment" onInput={this.inputHandlerText.bind(this)}></textarea>
           <button className="addSection__addButton">Add comments</button> 
        </form>
        </div>
        { listItems }
        </div>
    }
}
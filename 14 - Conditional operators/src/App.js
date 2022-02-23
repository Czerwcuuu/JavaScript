import React from "react";
import "./App.css";
import User from "./User/User";
import Customer from "./Customer/Customer";
import Club from "./Club/Club";
import Article from "./Article/Article";

class App extends React.Component {
  state = {
    articles: [
      { title: "title1", content: "This is content1" },
      { title: "title2", content: "This is content2" },
      { title: "title3", content: "This is content3" },
    ],
    showArticles: false,
  };

  toggleArticlesHandler = () => {
    const show = this.state.showArticles;
    this.setState({ showArticles: !show });
  };

  render() {

    let articles = null;

    if(this.state.showArticles){
      articles =           <div>
      <Article
        title={this.state.articles[0].title}
        content={this.state.articles[0].content}
      />
      <Article
        title={this.state.articles[1].title}
        content={this.state.articles[1].content}
      />
      <Article
        title={this.state.articles[2].title}
        content={this.state.articles[2].content}
      />
    </div>;
    }

    return (
      <div className="App">
        <button onClick={this.toggleArticlesHandler}>Toggle articles</button>
        {articles}
      </div>
    );
  }
}

export default App;

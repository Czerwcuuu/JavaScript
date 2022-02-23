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
      { title: "title4", content: "This is content4" },
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
      articles = this.state.articles.map(article => {
        return (
          <Article title={article.title} content={article.content}/>
        );
      });
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

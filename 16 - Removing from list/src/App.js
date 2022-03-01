import React from "react";
import "./App.css";
import User from "./User/User";
import Customer from "./Customer/Customer";
import Club from "./Club/Club";
import Article from "./Article/Article";

class App extends React.Component {
  state = {
    articles: [
      {id:0, title: "title1", content: "This is content1" },
      {id:1, title: "title2", content: "This is content2" },
      {id:2, title: "title3", content: "This is content3" },
      {id:3, title: "title4", content: "This is content4" },
    ],
    showArticles: false,
  };

  deleteArticleHandler = (articleIndex) =>{
    //const articles = this.state.articles.slice();
    const articles = [...this.state.articles];
    articles.splice(articleIndex,1);
    this.setState({articles:articles});
  }

  toggleArticlesHandler = () => {
    const show = this.state.showArticles;
    this.setState({ showArticles: !show });
  };

  render() {

    let articles = null;

    if(this.state.showArticles){
      articles = this.state.articles.map((article, index) => {
        return (
          <Article title={article.title} deleteArticle = {() => this.deleteArticleHandler(index)} content={article.content} key={article.id}/>
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

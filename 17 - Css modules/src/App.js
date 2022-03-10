import React from "react";
import "./App.css";
import Article from "./Article/Article";
import styles from "./App.module.css";



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
    let buttonStyles = [styles.toggleButton];

    if(this.state.showArticles){
      articles = this.state.articles.map((article, index) => {
        return (
          <Article title={article.title} deleteArticle = {() => this.deleteArticleHandler(index)} content={article.content} key={article.id}/>
        );
      });
      
      buttonStyles.push(styles.red);

    }

    const articleStyles = [];

    if (this.state.articles.length === 1){
      articleStyles.push("OneArticle");
    }

    if(this.state.articles.length >= 4){
      articleStyles.push('GreenArticles');
    }
    else{
      articleStyles.push('OrangeArticles');
    }



    return (
      <div className="App">
        <button className={buttonStyles.join(' ')} onClick={this.toggleArticlesHandler}>Toggle articles</button>
        <div className={articleStyles.join(' ')}>
        {articles}
        </div>
      </div>
    );
  }
}

export default App;

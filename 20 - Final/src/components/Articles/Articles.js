import React, { Component } from "react";
import Article from "./Article/Article";

class Articles extends Component {
  //Pozwala anulować proces aktualizacji propsów
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Articles shouldComponentUpdate");
    if (nextProps.articles !== this.props.articles){
      return true;
    }
    else{
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Articles getSnapshotBeforeUpdate");

    return { message: "this is test message" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Articles componentDidUpdate");
    console.log("Message:" + snapshot.message);
  }

  render() {
    console.log("articles");

    const articleStyles = [];

    //Logika odnośnie wyświetlania styli artykułów
    if (this.props.articles.length === 1) {
      articleStyles.push("OneArticle");
    }
    if (this.props.articles.length >= 4) {
      articleStyles.push("GreenArticles");
    } else {
      articleStyles.push("OrangeArticles");
    }

    //Wyświetlanie artykułów
    const articles = this.props.articles.map((article, index) => {
      return (
        <Article
          title={article.title}
          deleteArticle={() => this.props.deleteArticle(index)}
          content={article.content}
          key={article.id}
        />
      );
    });

    return <div className={articleStyles.join(" ")}> {articles} </div>;
  }
}

export default Articles;

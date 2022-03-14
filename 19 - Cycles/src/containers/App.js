import React from "react";
import "./App.css";
import Articles from "../components/Articles/Articles";
import Header from "../components/Header/Header";
import Links from "../components/Links/Links";




class App extends React.Component {

  constructor(props){
    console.log("App construktor");

    super(props);
  }

  static getDerivedStateFromProps(props,state){
    console.log("App getDeriverStateFromProps");

    return state;
  }

  //Tutaj będą wykonywać się wszelkie metody asynchroniczne, http, gety itd
  componentDidMount(){
    console.log("App componentDidMount");
  }

  componentDidUpdate(){
    console.log("App componentDidUpdate");
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("App shouldComponentUpdate");

    return true;
  }

  state = {
    articles: [
      {id:0, title: "title1", content: "This is content1" },
      {id:1, title: "title2", content: "This is content2" },
      {id:2, title: "title3", content: "This is content3" },
      {id:3, title: "title4", content: "This is content4" },
    ],
    showArticles: false,
    showSeconds: false,
    counter: 0,
  };

  deleteArticleHandler = (articleIndex) =>{
    const articles = [...this.state.articles];
    articles.splice(articleIndex,1);
    this.setState({articles:articles});
  }

  toggleSecondsHandler = () => {
    const areSecondsVisible = this.state.showSeconds;
    this.setState({showSeconds: !areSecondsVisible});
  }

  toggleArticlesHandler = () => {
    const show = this.state.showArticles;
    this.setState({ showArticles: !show });
  };

  countHandler = () => {
    let i;
    for(i=0; i<20; i++){
      this.setState((prevState, props) => ({counter: prevState.counter +1}));
    }
    console.log("Counter: " + this.state.counter);
  }


  render() {   
    console.log("App render");

    let articles = null;
    let seconds = null;

    if(this.state.showSeconds){
      const now = new Date();
      seconds = <h1>{now.getSeconds()}</h1>
    }

    if(this.state.showArticles){
      articles = <Articles articles={this.state.articles} deleteArticle = {this.deleteArticleHandler}/>
    }


    return (
      <div className="App">
        <button onClick={this.countHandler}>Count</button><br/>
        <button onClick={this.toggleSecondsHandler}>Toggle seconds</button>
        {seconds}
        <Header showArticles={this.state.showArticles} toggleArticles={this.toggleArticlesHandler}/>
        {articles}
        <Links/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { connect } from 'dva';
import Editor from './editor';
import styles from './IndexPage.css';


class IndexPage extends React.Component {

  state = {
    inputValue: 1,
  }
  EditorChange(content) {
    console.log(content)
  }

  render() {
    const body = "\u003cp\u003e\u003cspan style\u003d\"font-family:Verdana,Geneva,sans-serif\"\u003e1.按提示填写信息，勾选\u0026ldquo;我已阅读并同意\u0026rdquo;，点击\u0026ldquo;注册\u0026rdquo;，系统会自动发送一封验证邮件到您的邮箱。\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cimg alt\u003d\"\" src\u003d\"/sundax/imageDownLoad?filePath\u003d/data/web/apache-tomcat-8.0.24/webapps/sundax/upload/1530798013352图片2.png\" style\u003d\"height:363px; width:500px\" /\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cimg alt\u003d\"\" src\u003d\"/sundax/imageDownLoad?filePath\u003d/data/web/apache-tomcat-8.0.24/webapps/sundax/upload/1530800491768图片3_副本.png\" style\u003d\"height:409px; width:495px\" /\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-family:Verdana,Geneva,sans-serif\"\u003e2.打开您的邮箱，点开链接，完成邮箱验证。\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cimg alt\u003d\"\" src\u003d\"/sundax/imageDownLoad?filePath\u003d/data/web/apache-tomcat-8.0.24/webapps/sundax/upload/15311009490381530865028(1)_副本.png\" style\u003d\"height:486px; width:505px\" /\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-family:Verdana,Geneva,sans-serif\"\u003e3.返回首页，根据提示填写信息，开始登录。\u003c/span\u003e\u003c/p\u003e\n"
    return (
      <div className={styles.normal}>
        <Editor id={"text"} value={body} callback={content => this.EditorChange(content)}
          width="500" height="800" />
      </div>
    );
  }
}
IndexPage.propTypes = {
};

export default connect()(IndexPage);

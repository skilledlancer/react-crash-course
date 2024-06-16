import Post from './Post'
import classes from './PostsList.module.css'
function PostsList(props) {
return(<ul className={classes.posts}>
      <Post author="Manish" body="Learning React"/>
      <Post author="Sheetal" body="Awesome Journey"/>
      <Post author="Sparsh" body="Lets Enjoy"/>
</ul>);
}

export default PostsList;

import BlogList from "components/blog/BlogList";
import Header from "components/blog/Header";
import FullWidthLayout from "hocs/layouts/fullWidthLayout";
import { connect } from "react-redux";

function Blog({
}){
    return(
        <FullWidthLayout>
            <Header/>
            <BlogList/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list
});

export default connect(mapStateToProps,{
})(Blog)
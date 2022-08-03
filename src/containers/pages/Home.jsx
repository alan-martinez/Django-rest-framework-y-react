import FullWidthLayout from "hocs/layouts/fullWidthLayout";
import { useState } from "react";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";

function Home({
    get_blog_list,
    get_blog_list_page
}){
    useState(() => {
        get_blog_list()
    },[])
    return(
        <FullWidthLayout>
            Home
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps,{
    get_blog_list,
    get_blog_list_page,
})(Home)
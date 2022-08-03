import FullWidthLayout from "hocs/layouts/fullWidthLayout";
import { connect } from "react-redux";

function Home(){
    return(
        <FullWidthLayout>
            Home
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps,{

})(Home);
import React from "react";

// 카드를 클릭하지 않고 바로 url을 입력해 들어갔을 경우
// state가 없는 에러가 생긴다 (to를 통해 전달한)
// 이 문제를 해결하기 위해 클래스형 컴포넌트 사용
class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined) {
            // 리다이렉트
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        // 유효하지 않은 방식으로 들어왔을 때 체크
        if( location.state ) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;
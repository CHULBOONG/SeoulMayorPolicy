import React, { Component } from 'react';
import { voteOne, voteTwo } from './actions'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.count = this.props.count;
    this.question = {'박': ['국유지와 사유지활용 토지 임대부 방식을 통한 평당 1000만원 반값 아파트','한강변 35층 이하 규제 완화,30년이상 공공임대아파트부터 재건축', '지하철 1,2,4호선 지상구간, 경의중앙선, 경부 고속도로 지하화', '유치원 친환경 무상급식','25개 자치구 -> 21개 권역 재구성, 수직정원 조성','21분 생활권마을 콤팩트도시 전환, 돌봄공동체 추진', '지역간 보육불균형 해소','2040년까지 전기차,수소차로 전면 전환', '시민 1인당 블록체인 기반 화폐 10만원 지급 소상공인 무이자대출 1인당 5000만원', '주 4.5일제 도입으로 Work&Life Balance 개선', '2025년까지 서울 녹지비율 40%로 상향' ,'동물복지지원센터를 설치, 25개 구 공공 반려견 놀이터 설치', '소상공인 식품 등 구독 배달플랫폼'],
                     '오':['민간분양주택(재개발 재건축), 장기전세주택 활용 확대','2종 주거지역 7층 이하 규제와 한강변 35층 이하 높이 제한 폐지','비강남권 지상철 지하화, 서남권 랜드마크 육성','공동육아 지원센터 운영', '민간토지 활용 상생주택, 도심형 타운하우스 모아주택 설립', '언택트 가정보육 및 AI성장관리 시스템 구축', '야간 보육시설 확충', '2032년 서울 올림픽 유치', '중위소득 미만 200가구에 부족부분 50%지원하는 안심소득제로 빈곤층 해결', '재산세 과세표준 구간 신설, 재산세율 인하', '지역 건보료 주택,토지가격에 연동해 산정', '청년 대상 공공 재테크 컨설팅 플랫폼 `서울 영테크` 구축', '독거 노인 등 1인가구 인테리어와 리모델링 서비스 `공공 홈케어` ']};
  }

  handleVoteOne = () => {
    if (this.count == this.question['박'].length -1){
      return alert("모든 질문에 답변하셨습니다!");
    }

    this.store.dispatch(voteOne());
    
    this.count += 1;
  }

  handleVoteTwo = () => {
    if (this.count == this.question['박'].length -1){
      return alert("모든 질문에 답변하셨습니다!");
    }
    this.store.dispatch(voteTwo());
    this.count += 1;
  }

  // handleVoteThree = () => {
  //   this.store.dispatch(voteThree());
  //   this.count += 1;
  // }

  render() {
    return (
      <div>
        <div className="votemain" style={{'textAlign': 'center'}}>
        <div className="maintitle">
          <h2>공약으로 알아보는 서울 시장 후보</h2>
          <h4>선호하는 공약의 후보사진을 눌러주세요</h4>
          </div>
          <h1 className="questioncount">{this.count}/{this.question['박'].length -1}</h1>
          <span className="policyminju" >{this.question['박'][this.count]}</span>
          <span className="policygookhim" >{this.question['오'][this.count]}</span>
          <br /><br />
          <div className="icon-set">
            <div className="vote-icon">
              <img src="https://github.com/CHULBOONG/CHULBOONG/blob/master/parkyoungseon.jpg?raw=true" height="96" alt="1" onClick={this.handleVoteOne}></img>
            </div>
            <div className="vote-icon">
              <img src="https://github.com/CHULBOONG/CHULBOONG/blob/master/ohsehun.jpg?raw=true" height="96" alt="2" onClick={this.handleVoteTwo}></img>
            </div>
            {/* <div className="vote-icon">
              <img src="https://github.com/CHULBOONG/CHULBOONG/blob/master/parkwonsun.jpg?raw=true" height="96" alt="3" onClick={this.handleVoteThree}></img>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
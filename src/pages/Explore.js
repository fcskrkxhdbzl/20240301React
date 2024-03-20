import Article from "./../components/explore/Article";
import DummyData from "./../constants/explore/dummy_data.json";
import { useEffect, useRef, useState } from "react";
// import axiosConfig from "services/axiosConfig";
import exploreApi from "services/ExploreApi";

const Explore = () => {
  const targetRef = useRef();
  const [dogDataList, setDogDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  // 데이터 불러와서 화면에 출력할 article list 에 추가하기
  const fetchData = async () => {
    // 아직 로딩 중이라면 취소
    if (isLoading) {
      return false;
    }
    // 로딩 중이 아니라면 로딩 상태로 만들기
    setIsLoading(true);
    // 데이터 불러오기
    console.log(page);
    const url = `https://api.thedogapi.com/v1/images/search?size=small&format=json&has_breeds=true&order=ASC&page=${page}&limit=10`;
    // await axiosConfig.get(url).then((res) => {
    //   if (res.data && res.data.length > 0) {
    //     setDogDataList((prevData) => {
    //       return prevData.concat(res.data);
    //     });
    //   }
    // });
    await exploreApi.getDogList(url, setDogDataList);

    // 로딩 상태 끝내기
    setIsLoading(false);
  };

  // 마지막 스크롤 감지 시에 실행할 함수
  const targetHandler = () => {
    // 아직 로딩 중이라면 취소
    if (isLoading) {
      return false;
    }
    // 페이지 추가
    setPage((prevPage) => {
      return prevPage + 1;
    });
  };

  // 마운트 시에 최초에만 실행할 함수
  useEffect(() => {
    //
    const options = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observer = new IntersectionObserver(targetHandler, options);
    //
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    // observer.unobserve(viewTarget);
  }, []);

  // 페이지 변경 시에만 실행할 함수
  useEffect(() => {
    fetchData();
  }, [page]);

  // 게시글 목록을 출력할 요소 리스트로 만들기
  const articleList = DummyData.map((ele, idx, arr) => {
    return <Article article={ele} />;
  });

  const imgList = dogDataList.map((ele, idx, arr) => {
    return (
      <div>
        <div>이름: {ele.id}</div>
        <div>
          <img src={ele.url} style={{ height: "300px", width: "300px" }} />
        </div>
      </div>
    );
  });
  const testHandler = () => {
    exploreApi.testHandler({ id: "hello", pw: "pass" });
  };
  return (
    <div className="explore">
      <div>
        <button onClick={testHandler}>run test</button>
      </div>
      {articleList}
      {imgList}
      <div className="view-target" id="view-target" ref={targetRef}>
        <h1>target here</h1>
      </div>
    </div>
  );
};

export default Explore;

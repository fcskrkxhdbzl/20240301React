import axiosConfig from "services/axiosConfig";

const exploreApi = {
  testHandler: (param) => {
    axiosConfig.post("/login", param);
  },
  getDogList: async (url, setDogDataList) => {
    axiosConfig.get(url).then((res) => {
      if (res.data && res.data.length > 0) {
        setDogDataList((prevData) => {
          return prevData.concat(res.data);
        });
      }
    });
  },
};

export default exploreApi;

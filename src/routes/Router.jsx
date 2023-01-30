import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Mypage from 'pages/Mypage/Mypage';
import MyReview from 'pages/Mypage/MyReview/MyReview';
import MyLike from 'pages/Mypage/MyLike/MyLike';
import MyInfo from 'pages/Mypage/MyInfo/MyInfo';
import MyInfoFrom from 'pages/Mypage/MyInfo/MyInfoFrom';
import Main from 'pages/Main/Main';
import NotFound from 'pages/NotFound/NotFound';
import Board from 'pages/Board/Board';
import Template from 'components/Template/Template';

const Router = () => {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Board />} />
          {/* <ProtectedRoute> */}
          <Route path="/mypage" element={<Mypage />}>
            <Route path="/mypage/review" element={<MyReview />} />
            <Route path="/mypage/like" element={<MyLike />} />
            <Route path="/mypage/info" element={<MyInfo />}>
              <Route path="/mypage/info/modify" element={<MyInfoFrom />} />
            </Route>
          </Route>
          {/* </ProtectedRoute> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
};

export default Router;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { issueActions } from '../../redux/issue/issueSlice';

function ReadPost() {
  const postId = useParams();
  const dispatch = useDispatch();
  const singlePost = useSelector((state) => state.issue.singlePost);

  const [commentsWithUserInfo, setCommentsWithUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/post/singlepost/${postId.postId}`)
      .then((response) => {
        dispatch(issueActions.setSinglePost(response.data));
        const comments = response.data[0].comments;
        const commentsPromises = comments.map((comment) =>
          axios
            .get(`http://localhost:8080/auth/${comment.user}`)
            .then((userResponse) => {
              return {
                ...comment,
                userInfo: userResponse.data, 
              };
            })
            .catch((error) => {
              console.error('Error fetching user info:', error);
              return comment; 
            })
        );
        Promise.all(commentsPromises).then((commentsWithInfo) => {
          setCommentsWithUserInfo(commentsWithInfo);
        });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, [dispatch, postId]);

  return (
    <div>
      {singlePost === null ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-2">
          <img className="top-10 w-full pl-20 rounded-md" src={`http://localhost:8080/${singlePost[0].image}`} alt="" />
          <div className="p-10">
            <p className="pb-5">{singlePost[0]?.comments?.length} Comments</p>
            <hr />
            <div className="pl-3">
              <div className="pb-3">
                <p>{singlePost[0].content}</p>
              </div>
              {commentsWithUserInfo.map((comment) => (
                <div className="flex gap-3  pt-4 pl-5 pb-2" key={comment._id}>
                  <img className='w-10 h-10 rounded-full' src={`http://localhost:8080/${comment.userInfo.image}`} alt='prof'/>
                  <div>
                     <p className="font-bold">{comment.userInfo.fullName}</p>
                     <p className='text-sm'> {comment.content}</p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReadPost;

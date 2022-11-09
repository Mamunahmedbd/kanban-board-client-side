import React, { useEffect, useState } from "react";
import socketIO from "socket.io-client";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const socket = socketIO.connect(
  "https://kanban-board-server-side.up.railway.app"
);

const Comments = () => {
  const { category, id } = useParams();
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("comments", (data) => setCommentList(data));
  }, []);
  useEffect(() => {
    socket.emit("fetchComments", { category, id });
  }, [category, id]);

  const addComment = (e) => {
    e.preventDefault();
    /*
        👇🏻 sends the comment, the task category, item's id and the userID.
         */
    socket.emit("addComment", {
      comment,
      category,
      id,
      userId: localStorage.getItem("userId"),
    });
    setComment("");
    navigate("/tasks");
  };

  return (
    <div className="comments__container">
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/tasks")}>
        Back to home
      </h2>
      <form className="comment__form" onSubmit={addComment}>
        <label htmlFor="comment">Add a comment</label>
        <textarea
          placeholder="Type your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          id="comment"
          name="comment"
          required
        ></textarea>
        <button className="commentBtn">ADD COMMENT</button>
      </form>
      <div className="comments__section">
        <h2>Existing Comments</h2>
        {commentList.map((comment) => (
          <div key={comment.id}>
            <p>
              <span style={{ fontWeight: "bold" }}>{comment.text} </span>by{" "}
              {comment.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

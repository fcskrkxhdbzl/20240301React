import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ id, username, userimg, img, caption }) {
  return (
    <Card>
      {/* 게시물 헤더 */}
      <CardHeader
        avatar={
          <Avatar src={userimg} aria-label={username}>
            {username.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography fontWeight="bold">{username}</Typography>}
      />
      {/* 게시물 내 이미지 */}
      <CardMedia component="img" image={img} alt={caption} />

      {/* 게시물 내 각종 버튼 */}
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <ModeCommentOutlinedIcon />
        </IconButton>
        <IconButton aria-label="chat">
          <SendIcon />
        </IconButton>

        <span style={{ flex: 1 }} />

        <IconButton aria-label="bookmark">
          <BookmarkBorderIcon />
        </IconButton>
      </CardActions>
      {/* Caption */}

      {/* Comments */}

      {/* TextField */}
    </Card>
  );
}
export default Post;

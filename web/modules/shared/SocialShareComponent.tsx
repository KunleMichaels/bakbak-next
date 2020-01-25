import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  // InstapaperShareButton,
  // LinkedinShareButton,
  // LinkedinIcon,
  // PinterestShareButton,
  // RedditShareButton,
  TwitterShareButton,
  TwitterIcon
  // WhatsappShareButton,
} from "react-share";
import Divider from "@material-ui/core/Divider";

interface Props {
  url: string;
  title: string;
  websiteName: string;
  hashtags?: string[];
  details?: string;
}
export const SocialShare = (props: Props) => {
  const { url, title, websiteName, details, hashtags } = props;
  let hashtag = "";
  let hashtagArray: string[] = [];
  if (hashtags && hashtags.length > 0) {
    hashtagArray = hashtags.map((ht) => "#" + ht);
    hashtag = hashtagArray.toString();
  }
  return (
    <>
      <Divider variant="middle" style={{ marginTop: 10 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          margin: 10
        }}
      >
        <EmailShareButton
          subject={title}
          body={details ? details : title}
          url={url}
          style={{ marginRight: 15 }}
        >
          <EmailIcon round={true} size={32} />
        </EmailShareButton>
        <FacebookShareButton
          quote={title}
          url={url}
          hashtag={hashtag}
          style={{ marginRight: 15 }}
        >
          <FacebookIcon round={true} size={32} />
        </FacebookShareButton>
        {/* <LinkedinShareButton url={url} style={{ marginRight: 15 }}>
          <LinkedinIcon round={true} size={32} />
        </LinkedinShareButton> */}
        <TwitterShareButton
          title={title}
          via={websiteName}
          hashtags={hashtags}
          url={url}
          style={{ marginRight: 15 }}
        >
          <TwitterIcon round={true} size={32} />
        </TwitterShareButton>
      </div>
    </>
  );
};

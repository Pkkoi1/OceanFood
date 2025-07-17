import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

type NotificationPlacement = NotificationArgsProps["placement"];

const openNotification = (
  placement: NotificationPlacement,
  title: string,
  content: string,
  url?: string
) => {
  notification.info({
    message: title,
    description: (
      <div>
        <p>{content}</p>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        )}
      </div>
    ),
    placement,
  });
};

export default openNotification;

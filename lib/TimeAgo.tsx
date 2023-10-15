import { formatDistanceToNow, parseISO } from 'date-fns';

export default function TimeAgo ({ timestamp }: any) {
  const date = parseISO(timestamp);
  let timeAgo = formatDistanceToNow(date, { addSuffix: true });
  timeAgo = timeAgo.replace(/\over\s|\almost\s|\about\s/g, " ");

  return (
    <span>{timeAgo}</span>
  );
};

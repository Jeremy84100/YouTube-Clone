export function formatViewCount(viewCount: number) {
    if (viewCount >= 1e7 && viewCount < 1e9) {
      return (viewCount / 1e6).toFixed(0) + "M";
    } else if (viewCount >= 1e6) {
      return (viewCount / 1e6).toFixed(1) + "M";
    } else if (viewCount >= 1e4 && viewCount < 1e6) {
      return (viewCount / 1e3).toFixed(0) + "K";
    } else if (viewCount >= 1e3) {
      return (viewCount / 1e3).toFixed(1) + "K";
    } else {
      return viewCount.toString();
    }
  }

export function formatSubscriberCount(subscriberCount: any) {
    if (subscriberCount >= 1e7 && subscriberCount < 1e9) {
      return (subscriberCount / 1e6).toFixed(0) + "M";
    } else if (subscriberCount >= 1e6) {
      return (subscriberCount / 1e6).toFixed(1) + "M";
    } else if (subscriberCount >= 1e4 && subscriberCount < 1e6) {
      return (subscriberCount / 1e3).toFixed(0) + "K";
    } else if (subscriberCount >= 1e3) {
      return (subscriberCount / 1e3).toFixed(1) + "K";
    } else {
      return subscriberCount.toString();
    }
  }

export function formatLikeCount(subscriberCount: number) {
    if (subscriberCount >= 1e7 && subscriberCount < 1e9) {
      return (subscriberCount / 1e6).toFixed(1) + "M";
    } else if (subscriberCount >= 1e6) {
      return (subscriberCount / 1e6).toFixed(1) + "M";
    } else if (subscriberCount >= 1e4 && subscriberCount < 1e6) {
      return (subscriberCount / 1e3).toFixed(0) + "K";
    } else if (subscriberCount >= 1e3) {
      return (subscriberCount / 1e3).toFixed(1) + "K";
    } else {
      return subscriberCount.toString();
    }
  }

  export function formatLikeCommentsCount(subscriberCount: number) {
    if (subscriberCount >= 1e7 && subscriberCount < 1e9) {
      return (subscriberCount / 1e6).toFixed(0) + "M";
    } else if (subscriberCount >= 1e6) {
      return (subscriberCount / 1e6).toFixed(0) + "M";
    } else if (subscriberCount >= 1e4 && subscriberCount < 1e6) {
      return (subscriberCount / 1e3).toFixed(0) + "K";
    } else if (subscriberCount >= 1e3) {
      return (subscriberCount / 1e3).toFixed(0) + "K";
    } else {
      return subscriberCount.toString();
    }
  }
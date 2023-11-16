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

export function convertDuration(durationString: string) {
    const match = durationString.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  
    let hours = "00";
    let minutes = "00";
    let seconds = "00";
  
    if (match) {
      if (match[1]) {
        hours = match[1].replace("H", "").padStart(2, "0");
      }
      if (match[2]) {
        minutes = match[2].replace("M", "").padStart(2, "0");
      }
      if (match[3]) {
        seconds = match[3].replace("S", "").padStart(2, "0");
      }
    }
  
    if (hours !== "00") {
      return `${hours}:${minutes}:${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }

  export function formatDate(dateString: string) {
    const options: DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  export function formatNumberWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
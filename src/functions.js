import { interval } from "rxjs";
import { map } from "rxjs/operators";

export const onStart = ({
  subscription,
  delay,
  setTimer,
  diff,
  setSubscription,
  setDiff,
}) => {
  if (!subscription) {
    const timerSubscription = interval(delay)
      .pipe(map((v) => v + 1))
      .subscribe((v) => {
        setTimer(v + diff);
      });
    setSubscription(timerSubscription);
  } else {
    subscription.unsubscribe();
    setTimer(0);
    setDiff(0);
    setSubscription("");
  }
};

export const onWait = ({
  prevent,
  setPrevent,
  subscription,
  setDiff,
  timer,
  setSubscription,
}) => {
  if (prevent) {
    setPrevent(false);
    const timerInstance = setTimeout(function () {
      setPrevent(true);
      clearTimeout(timerInstance);
    }, 300);
  } else {
    if (subscription) {
      subscription.unsubscribe();
    }

    setDiff(timer);
    setSubscription("");
  }
};

export const onReset = ({ subscription, delay, setTimer, setSubscription }) => {
  if (subscription) {
    subscription.unsubscribe();
  }

  const timerSubscription = interval(delay).subscribe((v) => {
    setTimer(v);
  });
  setSubscription(timerSubscription);
};

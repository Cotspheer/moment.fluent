interface MomentStatic {
    fluent: MomentFluentAPI;
}

interface MomentFluentAPI {
    isBreakfast(): boolean;
    isSecondBreakfast(): boolean;
    isMorning(): boolean;
    isLunchtime(): boolean;
    isAfternoon(): boolean;
    isTeatime(): boolean;
    isDinner(): boolean;
    isEvening(): boolean;
    isNight(): boolean;
}

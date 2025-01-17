import { MutableRefObject } from 'react';
import { AllowEmpty, ClockFormat, LeadingZero, Locale, OnError, PeriodType, SetInternalError, SetValueNumbersOrUndefined, SetValuePeriod, Shortcuts, Unit } from './types';
export declare function setValuesFromCronString(cronString: string, setInternalError: SetInternalError, onError: OnError, allowEmpty: AllowEmpty, internalValueRef: MutableRefObject<string>, firstRender: boolean, locale: Locale, shortcuts: Shortcuts, setMinutes: SetValueNumbersOrUndefined, setHours: SetValueNumbersOrUndefined, setMonthDays: SetValueNumbersOrUndefined, setMonths: SetValueNumbersOrUndefined, setWeekDays: SetValueNumbersOrUndefined, setPeriod: SetValuePeriod): void;
export declare function getCronStringFromValues(period: PeriodType, months: number[] | undefined, monthDays: number[] | undefined, weekDays: number[] | undefined, hours: number[] | undefined, minutes: number[] | undefined, humanizeValue?: boolean): string;
export declare function partToString(cronPart: number[], unit: Unit, humanize?: boolean, leadingZero?: LeadingZero, clockFormat?: ClockFormat): string;
export declare function formatValue(value: number, unit: Unit, humanize?: boolean, leadingZero?: LeadingZero, clockFormat?: ClockFormat): string;
export declare function parsePartArray(arr: number[], unit: Unit): number[];

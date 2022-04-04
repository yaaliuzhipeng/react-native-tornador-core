import {
  Dimensions,
  Platform,
  StatusBar,
  PixelRatio,
  StatusBarStyle,
} from 'react-native';
const {width: sw, height: sh} = Dimensions.get('screen');
const DeviceBaseSize = global.DeviceBaseSize ?? {w: 375, h: 812};
const PixelRatioValue = PixelRatio.get();

export function __setDeviceBaseSize(size: {w: number; h: number}) {
  global.DeviceBaseSize = size;
}
export function __turnOnTranslucentStatusBar(
  barStyle: StatusBarStyle,
  animated?: boolean,
) {
  if (Platform.OS === 'android') {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle(barStyle, animated);
  }
}

const ww = Math.min(sw, sh);
const wh = Math.max(sw, sh);

function ft(size: number) {
  return Math.round((size * Math.min(sw, sh)) / DeviceBaseSize.w);
}
function fth(size: number) {
  return Math.round((size * Math.max(sw, sh)) / DeviceBaseSize.h);
}
function pixel(dp: number) {
  return PixelRatio.roundToNearestPixel((1 / PixelRatioValue) * dp);
}

function di(...args) {
  console.log('【Info】 ', ...args);
}
function dw(...args) {
  console.log('【Warning】 ', ...args);
}
function de(...args) {
  console.log('【Error】 ', ...args);
}

function randStr(count: number) {
  var text = '';
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < count; i++)
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  return text;
}

function formatDate(date: Date, fmt: string) {
  /**
   * YYYY | yyyy  =>  2021
   * MM  =>  month, 12
   * DD  =>  day, 16
   * HH  =>  hour, 18
   * mm  =>  minute, 52
   * ss  =>  second, 02
   */
  let output = fmt.trim();
  if (output.indexOf('YYYY') != -1) {
    output = output.replace('YYYY', date.getFullYear().toString());
  } else if (output.indexOf('yyyy') != -1) {
    output = output.replace('yyyy', date.getFullYear().toString());
  }
  if (output.indexOf('MM') != -1) {
    output = output.replace('MM', (date.getMonth() + 1).toString());
  }
  if (output.indexOf('DD') != -1) {
    output = output.replace('DD', date.getDate().toString());
  } else if (output.indexOf('dd') != -1) {
    output = output.replace('dd', date.getDate().toString());
  }
  if (output.indexOf('HH') != -1) {
    let h = date.getHours().toString();
    output = output.replace('HH', h.length > 1 ? h : '0' + h);
  } else if (output.indexOf('hh') != -1) {
    let h = (date.getHours() - 12).toString();
    output = output.replace('hh', h.length > 1 ? h : '0' + h);
  }
  if (output.indexOf('mm') != -1) {
    let m = date.getMinutes().toString();
    output = output.replace('mm', m.length > 1 ? m : '0' + m);
  }
  if (output.indexOf('ss') != -1) {
    let s = date.getSeconds().toString();
    output = output.replace('ss', s.length > 1 ? s : '0' + s);
  }

  return output;
}
function formatHourMinutes(date: Date, is24?: boolean) {
  let h = '',
    m = '';
  h = is24 ? date.getHours().toString() : (date.getHours() - 12).toString();
  if (h.length === 1) {
    h = '0' + h;
  }
  m = date.getMinutes().toString();
  if (m.length === 1) {
    m = '0' + m;
  }
  return is24
    ? `${h}:${m}`
    : `${date.getHours() >= 12 ? '下午' : '上午'} ${h}:${m}`;
}

type TypeKind = 'string' | 'function' | 'null' | 'undefined' | 'number';
function isType(target: any, type: TypeKind) {
  if (type === 'null') {
    return target === null;
  } else if (type === 'undefined') {
    return target === undefined;
  } else {
    return typeof target === type;
  }
}
function isNil(target: any) {
  return target === undefined || target === null;
}
function empty() {
  return;
}

export {
  ww,
  wh,
  ft,
  fth,
  pixel,
  di,
  dw,
  de,
  randStr,
  formatDate,
  formatHourMinutes,
  isNil,
  isType,
  empty,
};

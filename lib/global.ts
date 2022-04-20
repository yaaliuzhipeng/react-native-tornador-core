import { Platform } from 'react-native'
import {ft,fth,pixel,di,dw,de,ww,wh,isNil,isType,formatDate,formatHourMinutes} from './core'

global.ft = ft;
global.fth = fth;
global.font = ft;
global.pixel = pixel;

global.di = di;
global.dw = dw;
global.de = de;

global.ww = ww;
global.wh = wh;

global.isAndroid = Platform.OS === 'android';
global.isIos = Platform.OS === 'ios';
global.isMac = Platform.OS === 'macos';
global.isWeb = Platform.OS === 'web';
global.isWin = Platform.OS === 'windows';

global.isType = isType;
global.isNil = isNil;

global.times = {
    formatDate
}
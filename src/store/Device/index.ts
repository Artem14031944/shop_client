import { TypeBrands, TypeDevice, TypeTypes } from "./types";
import { makeAutoObservable } from "mobx";

export default class DivecrStore {
    _types = [
        { id: 1, name: 'Холодильник' },
        { id: 2, name: 'Смартфон' },
    ] as TypeTypes[];

    _brands = [
        { id: 1, name: 'Samsung' },
        { id: 2, name: 'Apple' },
    ] as TypeBrands[];

    _devices = [
        { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pocket-lint.com%2Fapple-iphone-12-pro-review%2F&psig=AOvVaw0cmnCnqNx-YGzl7loF3LBG&ust=1718636578162000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD-66iy4IYDFQAAAAAdAAAAABAE' },
        { id: 2, name: 'Iphone 12 pro', price: 35000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pocket-lint.com%2Fapple-iphone-12-pro-review%2F&psig=AOvVaw0cmnCnqNx-YGzl7loF3LBG&ust=1718636578162000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD-66iy4IYDFQAAAAAdAAAAABAE' },
        { id: 3, name: 'Iphone 12 pro', price: 15000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pocket-lint.com%2Fapple-iphone-12-pro-review%2F&psig=AOvVaw0cmnCnqNx-YGzl7loF3LBG&ust=1718636578162000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD-66iy4IYDFQAAAAAdAAAAABAE' },
        { id: 4, name: 'Iphone 12 pro', price: 45000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pocket-lint.com%2Fapple-iphone-12-pro-review%2F&psig=AOvVaw0cmnCnqNx-YGzl7loF3LBG&ust=1718636578162000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD-66iy4IYDFQAAAAAdAAAAABAE' },
    ] as TypeDevice[];

    constructor() {
        this._types = [];
        this._brands = [];
        this._devices = [];
        makeAutoObservable(this);
    };


    setType(types: TypeTypes[]) {
        this._types = types
    };

    setBrand(brands: TypeBrands[]) {
        this._brands = brands
    };

    setDevice(devices: TypeDevice[]) {
        this._devices = devices
    };

    get types() {
        return this._types;
    };

    get brands() {
        return this._brands;
    };

    get device() {
        return this._devices;
    };
};
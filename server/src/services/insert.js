import { v4 } from "uuid";
import chothuecanho from "../../data/chothuecanho.json";
import chothuematbang from "../../data/chothuematbang.json";
import chothuephongtro from "../../data/chothuephongtro.json";
import nhachothue from "../../data/nhachothue.json";

import db from "../models";
import generateCode from "../utils/generateCode";
import bcrypt from "bcryptjs";
import { getNumberFromString } from "../utils/commons";
import { dataAcreages, dataPrices } from "../utils/data";

const dataChoThueCanHo = chothuecanho.body;
const dataChoThueMatBang = chothuematbang.body;
const dataChoThuePhongTro = chothuephongtro.body;
const dataNhaChoThue = nhachothue.body;

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const insert = () =>
  new Promise(async (resolve, reject) => {
    try {
      dataChoThueCanHo.forEach(async (item) => {
        let postId = v4();
        let labelCode = generateCode(item?.header?.class?.classType);
        let attributeId = v4();
        let userId = v4();
        let overviewId = v4();
        let imagesId = v4();
        let currentAcreage = getNumberFromString(
          item?.header?.attributes?.acreage
        );
        let currentPrice = getNumberFromString(item?.header?.attributes?.price);
        await db.Post.create({
          id: postId,
          title: item?.header?.title,
          star: item?.header?.star,
          labelCode,
          address: item?.header?.address,
          attributeId,
          categoryCode: "CTCH",
          description: JSON.stringify(item?.mainContent?.content),
          userId,
          acreageCode: dataAcreages.find(
            (acreage) =>
              acreage.max > currentAcreage && acreage.min <= currentAcreage
          )?.code,
          priceCode: dataPrices.find(
            (price) => price.max > currentPrice && price.min <= currentPrice
          )?.code,
          overviewId,

          imagesId,
        });

        await db.Attribute.create({
          id: attributeId,
          price: item?.header?.attributes?.price,
          acreage: item?.header?.attributes?.acreage,
          published: item?.header?.attributes?.published,
          hashtag: item?.header?.attributes?.hashtag,
        });

        await db.Image.create({
          id: imagesId,
          image: JSON.stringify(item?.images),
        });

        await db.Label.findOrCreate({
          where: { code: labelCode },
          defaults: {
            code: labelCode,
            value: item?.header?.class?.classType,
          },
        });

        await db.Overview.create({
          id: overviewId,
          code: item?.overview?.content.find((i) => i.name === "Mã tin:")
            ?.content,
          area: item?.overview?.content.find((i) => i.name === "Khu vực:")
            ?.content,
          type: item?.overview?.content.find((i) => i.name === "Loại tin rao:")
            ?.content,
          target: item?.overview?.content.find(
            (i) => i.name === "Đối tượng thuê:"
          )?.content,
          created: item?.overview?.content.find((i) => i.name === "Ngày đăng:")
            ?.content,
          expired: item?.overview?.content.find(
            (i) => i.name === "Ngày hết hạn:"
          )?.content,
          bonus: item?.overview?.content.find((i) => i.name === "Gói tin:")
            ?.content,
        });

        await db.User.create({
          id: userId,
          name: item?.contact?.content.find((i) => i.name === "Liên hệ:")
            ?.content,
          password: hashPassword("Abc12345"),
          phone: item?.contact?.content.find((i) => i.name === "Điện thoại:")
            ?.content,
          zalo: item?.contact?.content.find((i) => i.name === "Zalo")?.content,
        });
      });
      dataChoThueMatBang.forEach(async (item) => {
        let postId = v4();
        let labelCode = generateCode(item?.header?.class?.classType);
        let attributeId = v4();
        let userId = v4();
        let overviewId = v4();
        let imagesId = v4();
        let currentAcreage = getNumberFromString(
          item?.header?.attributes?.acreage
        );
        let currentPrice = getNumberFromString(item?.header?.attributes?.price);
        await db.Post.create({
          id: postId,
          title: item?.header?.title,
          star: item?.header?.star,
          labelCode,
          address: item?.header?.address,
          attributeId,
          categoryCode: "CTMB",
          description: JSON.stringify(item?.mainContent?.content),
          userId,
          acreageCode: dataAcreages.find(
            (acreage) =>
              acreage.max > currentAcreage && acreage.min <= currentAcreage
          )?.code,
          priceCode: dataPrices.find(
            (price) => price.max > currentPrice && price.min <= currentPrice
          )?.code,
          overviewId,

          imagesId,
        });

        await db.Attribute.create({
          id: attributeId,
          price: item?.header?.attributes?.price,
          acreage: item?.header?.attributes?.acreage,
          published: item?.header?.attributes?.published,
          hashtag: item?.header?.attributes?.hashtag,
        });

        await db.Image.create({
          id: imagesId,
          image: JSON.stringify(item?.images),
        });

        await db.Label.findOrCreate({
          where: { code: labelCode },
          defaults: {
            code: labelCode,
            value: item?.header?.class?.classType,
          },
        });

        await db.Overview.create({
          id: overviewId,
          code: item?.overview?.content.find((i) => i.name === "Mã tin:")
            ?.content,
          area: item?.overview?.content.find((i) => i.name === "Khu vực:")
            ?.content,
          type: item?.overview?.content.find((i) => i.name === "Loại tin rao:")
            ?.content,
          target: item?.overview?.content.find(
            (i) => i.name === "Đối tượng thuê:"
          )?.content,
          created: item?.overview?.content.find((i) => i.name === "Ngày đăng:")
            ?.content,
          expired: item?.overview?.content.find(
            (i) => i.name === "Ngày hết hạn:"
          )?.content,
          bonus: item?.overview?.content.find((i) => i.name === "Gói tin:")
            ?.content,
        });

        await db.User.create({
          id: userId,
          name: item?.contact?.content.find((i) => i.name === "Liên hệ:")
            ?.content,
          password: hashPassword("Abc12345"),
          phone: item?.contact?.content.find((i) => i.name === "Điện thoại:")
            ?.content,
          zalo: item?.contact?.content.find((i) => i.name === "Zalo")?.content,
        });
      });
      dataChoThuePhongTro.forEach(async (item) => {
        let postId = v4();
        let labelCode = generateCode(item?.header?.class?.classType);
        let attributeId = v4();
        let userId = v4();
        let overviewId = v4();
        let imagesId = v4();
        let currentAcreage = getNumberFromString(
          item?.header?.attributes?.acreage
        );
        let currentPrice = getNumberFromString(item?.header?.attributes?.price);
        await db.Post.create({
          id: postId,
          title: item?.header?.title,
          star: item?.header?.star,
          labelCode,
          address: item?.header?.address,
          attributeId,
          categoryCode: "CTPT",
          description: JSON.stringify(item?.mainContent?.content),
          userId,
          acreageCode: dataAcreages.find(
            (acreage) =>
              acreage.max > currentAcreage && acreage.min <= currentAcreage
          )?.code,
          priceCode: dataPrices.find(
            (price) => price.max > currentPrice && price.min <= currentPrice
          )?.code,
          overviewId,

          imagesId,
        });

        await db.Attribute.create({
          id: attributeId,
          price: item?.header?.attributes?.price,
          acreage: item?.header?.attributes?.acreage,
          published: item?.header?.attributes?.published,
          hashtag: item?.header?.attributes?.hashtag,
        });

        await db.Image.create({
          id: imagesId,
          image: JSON.stringify(item?.images),
        });

        await db.Label.findOrCreate({
          where: { code: labelCode },
          defaults: {
            code: labelCode,
            value: item?.header?.class?.classType,
          },
        });

        await db.Overview.create({
          id: overviewId,
          code: item?.overview?.content.find((i) => i.name === "Mã tin:")
            ?.content,
          area: item?.overview?.content.find((i) => i.name === "Khu vực:")
            ?.content,
          type: item?.overview?.content.find((i) => i.name === "Loại tin rao:")
            ?.content,
          target: item?.overview?.content.find(
            (i) => i.name === "Đối tượng thuê:"
          )?.content,
          created: item?.overview?.content.find((i) => i.name === "Ngày đăng:")
            ?.content,
          expired: item?.overview?.content.find(
            (i) => i.name === "Ngày hết hạn:"
          )?.content,
          bonus: item?.overview?.content.find((i) => i.name === "Gói tin:")
            ?.content,
        });

        await db.User.create({
          id: userId,
          name: item?.contact?.content.find((i) => i.name === "Liên hệ:")
            ?.content,
          password: hashPassword("Abc12345"),
          phone: item?.contact?.content.find((i) => i.name === "Điện thoại:")
            ?.content,
          zalo: item?.contact?.content.find((i) => i.name === "Zalo")?.content,
        });
      });
      dataNhaChoThue.forEach(async (item) => {
        let postId = v4();
        let labelCode = generateCode(item?.header?.class?.classType);
        let attributeId = v4();
        let userId = v4();
        let overviewId = v4();
        let imagesId = v4();
        let currentAcreage = getNumberFromString(
          item?.header?.attributes?.acreage
        );
        let currentPrice = getNumberFromString(item?.header?.attributes?.price);
        await db.Post.create({
          id: postId,
          title: item?.header?.title,
          star: item?.header?.star,
          labelCode,
          address: item?.header?.address,
          attributeId,
          categoryCode: "NCH",
          description: JSON.stringify(item?.mainContent?.content),
          userId,
          acreageCode: dataAcreages.find(
            (acreage) =>
              acreage.max > currentAcreage && acreage.min <= currentAcreage
          )?.code,
          priceCode: dataPrices.find(
            (price) => price.max > currentPrice && price.min <= currentPrice
          )?.code,
          overviewId,

          imagesId,
        });

        await db.Attribute.create({
          id: attributeId,
          price: item?.header?.attributes?.price,
          acreage: item?.header?.attributes?.acreage,
          published: item?.header?.attributes?.published,
          hashtag: item?.header?.attributes?.hashtag,
        });

        await db.Image.create({
          id: imagesId,
          image: JSON.stringify(item?.images),
        });

        await db.Label.findOrCreate({
          where: { code: labelCode },
          defaults: {
            code: labelCode,
            value: item?.header?.class?.classType,
          },
        });

        await db.Overview.create({
          id: overviewId,
          code: item?.overview?.content.find((i) => i.name === "Mã tin:")
            ?.content,
          area: item?.overview?.content.find((i) => i.name === "Khu vực:")
            ?.content,
          type: item?.overview?.content.find((i) => i.name === "Loại tin rao:")
            ?.content,
          target: item?.overview?.content.find(
            (i) => i.name === "Đối tượng thuê:"
          )?.content,
          created: item?.overview?.content.find((i) => i.name === "Ngày đăng:")
            ?.content,
          expired: item?.overview?.content.find(
            (i) => i.name === "Ngày hết hạn:"
          )?.content,
          bonus: item?.overview?.content.find((i) => i.name === "Gói tin:")
            ?.content,
        });

        await db.User.create({
          id: userId,
          name: item?.contact?.content.find((i) => i.name === "Liên hệ:")
            ?.content,
          password: hashPassword("Abc12345"),
          phone: item?.contact?.content.find((i) => i.name === "Điện thoại:")
            ?.content,
          zalo: item?.contact?.content.find((i) => i.name === "Zalo")?.content,
        });
      });

      dataPrices.forEach(async (item, index) => {
        await db.Price.create({
          code: item.code,
          value: item.value,
          order: index + 1,
        });
      });
      dataAcreages.forEach(async (item, index) => {
        await db.Acreage.create({
          code: item.code,
          value: item.value,
          order: index + 1,
        });
      });

      resolve("Done.");
    } catch (error) {
      reject(error);
    }
  });

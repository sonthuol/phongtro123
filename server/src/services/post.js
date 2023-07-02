import db from "../models";

export const getPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "phone", "zalo", "avatar"],
          },
        ],
        attributes: ["id", "title", "star", "address", "description"],
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getPostsWithPagination = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset =
        !page || page <= 1 ? 0 : (+page - 1) * +process.env.LIMIT_PAGE;
      const response = await db.Post.findAndCountAll({
        where: query,
        raw: true,
        nest: true,
        offset: offset,
        limit: +process.env.LIMIT_PAGE,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "phone", "zalo", "avatar"],
          },
        ],
        attributes: ["id", "title", "star", "address", "description"],
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getNewPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        limit: +process.env.LIMIT_NEW_POST,
        order: [["createdAt", "DESC"]],
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price"],
          },
        ],
        attributes: ["id", "title", "createdAt"],
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

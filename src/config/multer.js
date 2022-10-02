import multer from "multer";
import fs from "fs";

export const keyUpload = "image";

export const multerConfig = {
  storage: multer.diskStorage({
    destination: (req, file, next) => {
      const folder = "./images/";
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
      }
      next(null, folder);
    },

    filename: (req, file, next) => {
      const type = file.mimetype.split("/")[1];
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      next(null, `${file.fieldname}-${uniqueSuffix}.${type}`);
    },
  }),

  limits: {
    fieldSize: 1024 * 1024 * 5,
  },

  fileFilter: (req, file, next) => {
    const typeArray = file.mimetype.split("/");
    const fileType = typeArray[1];

    if (fileType !== "png" && fileType !== "jpg" && fileType !== "gif" && fileType !== "jpeg") {
      next({ message: `File type not supported ${fileType}` }, false);
    } else {
      next(null, true);
    }
  },
};

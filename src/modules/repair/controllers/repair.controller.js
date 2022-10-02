import RepairService from "../services/repair.service.js";
import multer from "multer";
import { multerConfig, keyUpload } from "../../../config/multer.js";
const upload = multer(multerConfig).single(keyUpload);

export default {
  async getRepairs(req, res) {
    const data = await RepairService.findAll();
    res.status(200).json({
      success: true,
      data,
    });
  },
  async getRepairById(req, res) {
    const { id } = req.params;
    const data = await RepairService.findOneById(+id);
    res.status(200).json({
      success: true,
      data: data ? data : {},
    });
  },
  async getRepairByIdSale(req, res) {
    const { id } = req.params;
    const data = await RepairService.findRepairByIdSale(id);
    res.status(200).json({
      success: true,
      data: data ? data : {},
    });
  },
  async createRepair(req, res) {
    upload(req, res, async (error) => {
      if (error) {
        console.log(`error: ${JSON.stringify(error)}`);
        return res.status(500).json({
          success: true,
          message: error,
        });
      }
      const data = await RepairService.create(req.body, req.file);
      if (!data) {
        res.status(403).json({
          success: false,
          data,
        });
      } else {
        res.status(201).json({
          success: true,
          data,
        });
      }
    });
  },
  async patchRepair(req, res) {
    const { id } = req.params;
    upload(req, res, async (error) => {
      if (error) {
        console.log(`error: ${JSON.stringify(error)}`);
        return res.status(500).json({
          success: true,
          message: error,
        });
      }
      const data = await RepairService.patchById(+id, req.body, req.file);
      if (data) {
        res.status(201).json({
          success: true,
          data,
        });
      } else {
        res.status(204).json({
          success: false,
        });
      }
    });
  },
  async deleteRepair(req, res) {
    const { id } = req.params;
    const puestion = await RepairService.deleteById(+id);
    if (puestion) {
      res.status(200).json({
        success: true,
        data: puestion,
      });
    } else {
      res.status(204).json({
        success: false,
      });
    }
  },
};

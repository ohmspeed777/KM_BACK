const KmGroup = require('../models/KmUnit');
const AppError = require('../utils/appError');
const GroupProject = require('../models/GroupProject');

exports.getAllUnit = async (req, res, next) => {
  try {
    const unit = await KmGroup.findAll({ include: GroupProject });

    res.status(200).json({
      status: 'success',
      data: unit,
    });
  } catch (err) {
    return next(new AppError('Can find all unit', 400));
  }
};

exports.createUnit = async (req, res, next) => {
  try {
    const unit = await KmGroup.create(req.body);

    res.status(200).json({
      status: 'success',
      data: unit,
    });
  } catch (err) {
    return next(new AppError('Can find all unit', 400));
  }
};

exports.updateUnit = async (req, res, next) => {
  try {
    await KmGroup.update(req.body, {
      where: {
        km_id: req.params.id,
      },
    });

    const unit = await KmGroup.findOne({
      where: {
        km_id: req.params.id,
      },
    });

    res.status(200).json({
      status: 'success',
      data: unit,
    });
  } catch (err) {
    return next(new AppError('Can find all unit', 400));
  }
};

exports.deleteUnit = async (req, res, next) => {
  try {
    const unit = await KmGroup.destroy({
      where: {
        km_id: req.params.id,
      },
    });

    res.status(204).json({
      status: 'success',
      data: unit,
    });
  } catch (err) {
    return next(new AppError('Can find all unit', 400));
  }
};

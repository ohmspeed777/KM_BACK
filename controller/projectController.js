const GroupProject = require('../models/GroupProject');
const AppError = require('../utils/appError');

exports.createProject = async (req, res, next) => {
  try {
    const project = await GroupProject.create(req.body);

    res.status(201).json({
      status: 'success',
      data: project,
    });
  } catch (err) {
    return next(new AppError('Can not insert project', 400));
  }
};

exports.getAllProject = async (req, res, next) => {
  try {
    const project = await GroupProject.findAll();

    res.status(200).json({
      status: 'success',
      data: project,
    });
  } catch (err) {
    return next(new AppError('Can not insert project', 400));
  }
};

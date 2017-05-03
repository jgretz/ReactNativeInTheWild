import patients from '../../data/patients';

export default (req, res) => {
  res.json(patients);
};

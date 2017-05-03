import prescriptions from '../../data/prescriptions';

export default (req, res) => {
  res.json(prescriptions);
};

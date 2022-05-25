import LinkRepository from "../../repository/LinkRepository";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      LinkRepository.getAll()
        .then(function (links) {
          return res.status(200).json(links);
        })
        .catch(function (error) {
          return res.status(400).json(error);
        });
      break;
    case "POST":
      const { title, url } = req.body;
      LinkRepository.new({ title, url })
        .then(function (link) {
          return res.status(201).json(link);
        })
        .catch(function (error) {
          return res.status(400).json(error);
        });
      break;

    case "DELETE":
      const { id } = req.body;
      LinkRepository.delete(id)
        .then(function (link) {
          return res.status(200).json(link);
        })
        .catch(function (error) {
          return res.status(400).json(error);
        });
      break;

    default:
      return res.status(404);
  }
  return res.status(400);
}

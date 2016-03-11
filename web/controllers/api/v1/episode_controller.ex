defmodule App.Api.V1.EpisodeController do
  use App.Web, :controller
  alias App.{Repo, Episode}

  def index conn, _params do
    query = from e in Episode,
      order_by: [desc: e.id]

    render conn, "index.json", episodes: Repo.all(query)
  end
end

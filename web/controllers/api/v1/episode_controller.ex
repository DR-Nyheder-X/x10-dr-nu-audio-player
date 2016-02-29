defmodule App.Api.V1.EpisodeController do
  use App.Web, :controller
  alias App.{Repo, Episode}

  def index conn, _params do
    render conn, "index.json", episodes: Repo.all(Episode)
  end
end

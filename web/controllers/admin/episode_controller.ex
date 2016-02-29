defmodule App.Admin.EpisodeController do
  use App.Web, :controller
  alias App.{Repo, Episode}

  plug :put_layout, {App.LayoutView, "admin.html"}
  plug :scrub_params, "episode" when action in [:create, :update]

  def index conn, _ do
    render conn, "index.html", episodes: Repo.all(Episode)
  end

  def new conn, _ do
    render conn, "new.html", changeset: Episode.changeset(%Episode{})
  end

  def create conn, %{"episode" => episode_params} \\ :empty do
    changeset = Episode.changeset(%Episode{}, episode_params)

    case Repo.insert(changeset) do
      {:ok, episode} ->
        conn
        |> redirect(to: admin_episode_path(conn, :show, episode))
      {:error, changeset} ->
        conn
        |> render("new.html", changeset: changeset)
    end
  end

  def show conn, %{"id" => id} do
    episode = Repo.get!(Episode, id)
    render conn, "show.html", episode: episode
  end

  def edit conn, %{"id" => id} do
    episode = Repo.get!(Episode, id)
    render conn, "edit.html", changeset: Episode.changeset(episode)
  end

  def update conn, %{"id" => id, "episode" => episode_params} do
    episode = Repo.get!(Episode, id)
    changeset = Episode.changeset(episode, episode_params)

    case Repo.update(changeset) do
      {:ok, episode} ->
        conn
        |> redirect(to: admin_episode_path(conn, :show, episode))
      {:error, changeset} ->
        conn |> render("edit.html", changeset: changeset)
    end
  end

  def delete conn, %{"id" => id} do
    episode = Repo.get!(Episode, id)
    Repo.delete! episode
    redirect conn, to: admin_episode_path(conn, :index)
  end
end

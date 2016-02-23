defmodule App.Api.V1.PlaylistController do
  use App.Web, :controller

  defmodule Track do
    @derive [Poison.Encoder]
    defstruct id: nil, href: nil, title: nil
    @type t :: [id: Integer, href: String, title: String]
  end

  def index conn, _params do
    json conn, %{playlist: %{
      tracks: [
        %Track{
          id: 1,
          href: "http://s3.brnbw.com/03-Inside-My-Pants.mp3",
          title: "Inside My Pants"
        },
        %Track{
          id: 2,
          href: "http://s3.brnbw.com/02-Indiana.mp3",
          title: "Indiana"
        },
        %Track{
          id: 3,
          href: "http://s3.brnbw.com/02-Sweatshop.mp3",
          title: "Sweatshop"
        }
      ]
    }}
  end
end

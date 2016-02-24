defmodule Mix.Tasks.App.Digest do
  use Mix.Task

  def run(args) do
    Mix.Shell.IO.cmd "NODE_ENV=production ./node_modules/webpack/bin/webpack.js -p"
  end
end


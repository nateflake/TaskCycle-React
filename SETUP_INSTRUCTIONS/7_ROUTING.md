## INSTALL react-router-dom
> in terminal
  > cd to client folder (where package.json is located)
    npm install react-router-dom

## ADD MIDDLEWARE
if using a Program.cs file, ...
    // app.UseHttpsRedirection();
    app.UseRouting();

## HIERARCHY
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
<BrowserRouter>
